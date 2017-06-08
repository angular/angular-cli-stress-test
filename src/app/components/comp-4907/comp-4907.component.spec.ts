/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4907Component } from './comp-4907.component';

describe('Comp4907Component', () => {
  let component: Comp4907Component;
  let fixture: ComponentFixture<Comp4907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
