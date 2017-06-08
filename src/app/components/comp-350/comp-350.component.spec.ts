/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp350Component } from './comp-350.component';

describe('Comp350Component', () => {
  let component: Comp350Component;
  let fixture: ComponentFixture<Comp350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
