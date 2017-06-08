/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4529Component } from './comp-4529.component';

describe('Comp4529Component', () => {
  let component: Comp4529Component;
  let fixture: ComponentFixture<Comp4529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
