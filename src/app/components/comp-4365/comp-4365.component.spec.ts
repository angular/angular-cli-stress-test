/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4365Component } from './comp-4365.component';

describe('Comp4365Component', () => {
  let component: Comp4365Component;
  let fixture: ComponentFixture<Comp4365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
