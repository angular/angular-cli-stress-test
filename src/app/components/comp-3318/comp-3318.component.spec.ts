/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3318Component } from './comp-3318.component';

describe('Comp3318Component', () => {
  let component: Comp3318Component;
  let fixture: ComponentFixture<Comp3318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
