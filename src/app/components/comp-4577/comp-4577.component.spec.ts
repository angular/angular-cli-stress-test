/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4577Component } from './comp-4577.component';

describe('Comp4577Component', () => {
  let component: Comp4577Component;
  let fixture: ComponentFixture<Comp4577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
