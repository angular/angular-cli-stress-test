/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp567Component } from './comp-567.component';

describe('Comp567Component', () => {
  let component: Comp567Component;
  let fixture: ComponentFixture<Comp567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
