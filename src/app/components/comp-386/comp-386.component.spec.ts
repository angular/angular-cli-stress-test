/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp386Component } from './comp-386.component';

describe('Comp386Component', () => {
  let component: Comp386Component;
  let fixture: ComponentFixture<Comp386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
