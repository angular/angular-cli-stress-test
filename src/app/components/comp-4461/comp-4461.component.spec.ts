/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4461Component } from './comp-4461.component';

describe('Comp4461Component', () => {
  let component: Comp4461Component;
  let fixture: ComponentFixture<Comp4461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
