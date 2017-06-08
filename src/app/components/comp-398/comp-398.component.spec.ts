/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp398Component } from './comp-398.component';

describe('Comp398Component', () => {
  let component: Comp398Component;
  let fixture: ComponentFixture<Comp398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
