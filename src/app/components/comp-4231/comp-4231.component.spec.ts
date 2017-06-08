/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4231Component } from './comp-4231.component';

describe('Comp4231Component', () => {
  let component: Comp4231Component;
  let fixture: ComponentFixture<Comp4231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
