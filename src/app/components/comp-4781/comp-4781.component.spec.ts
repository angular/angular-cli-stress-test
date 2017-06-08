/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4781Component } from './comp-4781.component';

describe('Comp4781Component', () => {
  let component: Comp4781Component;
  let fixture: ComponentFixture<Comp4781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
