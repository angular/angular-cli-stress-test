/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3944Component } from './comp-3944.component';

describe('Comp3944Component', () => {
  let component: Comp3944Component;
  let fixture: ComponentFixture<Comp3944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
