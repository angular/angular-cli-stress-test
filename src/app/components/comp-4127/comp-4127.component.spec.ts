/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4127Component } from './comp-4127.component';

describe('Comp4127Component', () => {
  let component: Comp4127Component;
  let fixture: ComponentFixture<Comp4127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
