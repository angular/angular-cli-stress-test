/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2018Component } from './comp-2018.component';

describe('Comp2018Component', () => {
  let component: Comp2018Component;
  let fixture: ComponentFixture<Comp2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
