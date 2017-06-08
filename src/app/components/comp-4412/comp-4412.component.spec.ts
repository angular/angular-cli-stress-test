/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4412Component } from './comp-4412.component';

describe('Comp4412Component', () => {
  let component: Comp4412Component;
  let fixture: ComponentFixture<Comp4412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
