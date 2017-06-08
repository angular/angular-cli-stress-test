/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4146Component } from './comp-4146.component';

describe('Comp4146Component', () => {
  let component: Comp4146Component;
  let fixture: ComponentFixture<Comp4146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
