/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp254Component } from './comp-254.component';

describe('Comp254Component', () => {
  let component: Comp254Component;
  let fixture: ComponentFixture<Comp254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
