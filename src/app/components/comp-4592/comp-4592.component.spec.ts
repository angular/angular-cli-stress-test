/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4592Component } from './comp-4592.component';

describe('Comp4592Component', () => {
  let component: Comp4592Component;
  let fixture: ComponentFixture<Comp4592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
