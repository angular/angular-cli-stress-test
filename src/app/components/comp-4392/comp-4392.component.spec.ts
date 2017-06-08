/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4392Component } from './comp-4392.component';

describe('Comp4392Component', () => {
  let component: Comp4392Component;
  let fixture: ComponentFixture<Comp4392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
