/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4321Component } from './comp-4321.component';

describe('Comp4321Component', () => {
  let component: Comp4321Component;
  let fixture: ComponentFixture<Comp4321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
