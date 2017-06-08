/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3912Component } from './comp-3912.component';

describe('Comp3912Component', () => {
  let component: Comp3912Component;
  let fixture: ComponentFixture<Comp3912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
