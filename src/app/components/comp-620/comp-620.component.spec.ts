/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp620Component } from './comp-620.component';

describe('Comp620Component', () => {
  let component: Comp620Component;
  let fixture: ComponentFixture<Comp620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
