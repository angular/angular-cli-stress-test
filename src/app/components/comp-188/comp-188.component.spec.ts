/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp188Component } from './comp-188.component';

describe('Comp188Component', () => {
  let component: Comp188Component;
  let fixture: ComponentFixture<Comp188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
