/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4551Component } from './comp-4551.component';

describe('Comp4551Component', () => {
  let component: Comp4551Component;
  let fixture: ComponentFixture<Comp4551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
