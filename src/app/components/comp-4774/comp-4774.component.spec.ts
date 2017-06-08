/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4774Component } from './comp-4774.component';

describe('Comp4774Component', () => {
  let component: Comp4774Component;
  let fixture: ComponentFixture<Comp4774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
