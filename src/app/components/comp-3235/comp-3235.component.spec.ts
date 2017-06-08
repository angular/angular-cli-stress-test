/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3235Component } from './comp-3235.component';

describe('Comp3235Component', () => {
  let component: Comp3235Component;
  let fixture: ComponentFixture<Comp3235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
