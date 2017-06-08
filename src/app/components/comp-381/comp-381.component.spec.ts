/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp381Component } from './comp-381.component';

describe('Comp381Component', () => {
  let component: Comp381Component;
  let fixture: ComponentFixture<Comp381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
