/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp336Component } from './comp-336.component';

describe('Comp336Component', () => {
  let component: Comp336Component;
  let fixture: ComponentFixture<Comp336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
