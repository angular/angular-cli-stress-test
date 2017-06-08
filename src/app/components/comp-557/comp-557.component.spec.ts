/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp557Component } from './comp-557.component';

describe('Comp557Component', () => {
  let component: Comp557Component;
  let fixture: ComponentFixture<Comp557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
