/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4182Component } from './comp-4182.component';

describe('Comp4182Component', () => {
  let component: Comp4182Component;
  let fixture: ComponentFixture<Comp4182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
