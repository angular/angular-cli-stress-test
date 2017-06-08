/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4197Component } from './comp-4197.component';

describe('Comp4197Component', () => {
  let component: Comp4197Component;
  let fixture: ComponentFixture<Comp4197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
