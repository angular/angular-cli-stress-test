/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4878Component } from './comp-4878.component';

describe('Comp4878Component', () => {
  let component: Comp4878Component;
  let fixture: ComponentFixture<Comp4878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
