/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4096Component } from './comp-4096.component';

describe('Comp4096Component', () => {
  let component: Comp4096Component;
  let fixture: ComponentFixture<Comp4096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
