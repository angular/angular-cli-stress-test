/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp399Component } from './comp-399.component';

describe('Comp399Component', () => {
  let component: Comp399Component;
  let fixture: ComponentFixture<Comp399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
