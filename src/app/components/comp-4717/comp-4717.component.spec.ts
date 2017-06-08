/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4717Component } from './comp-4717.component';

describe('Comp4717Component', () => {
  let component: Comp4717Component;
  let fixture: ComponentFixture<Comp4717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
