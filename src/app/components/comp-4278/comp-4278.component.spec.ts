/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4278Component } from './comp-4278.component';

describe('Comp4278Component', () => {
  let component: Comp4278Component;
  let fixture: ComponentFixture<Comp4278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
