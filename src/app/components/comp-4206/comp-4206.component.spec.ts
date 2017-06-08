/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4206Component } from './comp-4206.component';

describe('Comp4206Component', () => {
  let component: Comp4206Component;
  let fixture: ComponentFixture<Comp4206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
