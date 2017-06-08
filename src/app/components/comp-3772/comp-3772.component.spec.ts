/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3772Component } from './comp-3772.component';

describe('Comp3772Component', () => {
  let component: Comp3772Component;
  let fixture: ComponentFixture<Comp3772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
