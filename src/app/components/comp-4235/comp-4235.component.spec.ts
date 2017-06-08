/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4235Component } from './comp-4235.component';

describe('Comp4235Component', () => {
  let component: Comp4235Component;
  let fixture: ComponentFixture<Comp4235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
