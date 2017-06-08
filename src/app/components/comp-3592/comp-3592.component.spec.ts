/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3592Component } from './comp-3592.component';

describe('Comp3592Component', () => {
  let component: Comp3592Component;
  let fixture: ComponentFixture<Comp3592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
