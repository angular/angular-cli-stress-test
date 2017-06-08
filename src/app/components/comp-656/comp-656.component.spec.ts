/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp656Component } from './comp-656.component';

describe('Comp656Component', () => {
  let component: Comp656Component;
  let fixture: ComponentFixture<Comp656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
