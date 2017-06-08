/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4604Component } from './comp-4604.component';

describe('Comp4604Component', () => {
  let component: Comp4604Component;
  let fixture: ComponentFixture<Comp4604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
