/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp578Component } from './comp-578.component';

describe('Comp578Component', () => {
  let component: Comp578Component;
  let fixture: ComponentFixture<Comp578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
