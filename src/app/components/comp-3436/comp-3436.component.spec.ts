/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3436Component } from './comp-3436.component';

describe('Comp3436Component', () => {
  let component: Comp3436Component;
  let fixture: ComponentFixture<Comp3436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
