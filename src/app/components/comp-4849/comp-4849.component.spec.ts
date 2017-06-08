/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4849Component } from './comp-4849.component';

describe('Comp4849Component', () => {
  let component: Comp4849Component;
  let fixture: ComponentFixture<Comp4849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
