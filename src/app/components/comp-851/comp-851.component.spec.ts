/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp851Component } from './comp-851.component';

describe('Comp851Component', () => {
  let component: Comp851Component;
  let fixture: ComponentFixture<Comp851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
