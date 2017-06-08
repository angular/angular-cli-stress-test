/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp589Component } from './comp-589.component';

describe('Comp589Component', () => {
  let component: Comp589Component;
  let fixture: ComponentFixture<Comp589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
