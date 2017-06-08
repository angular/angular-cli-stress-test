/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp547Component } from './comp-547.component';

describe('Comp547Component', () => {
  let component: Comp547Component;
  let fixture: ComponentFixture<Comp547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
