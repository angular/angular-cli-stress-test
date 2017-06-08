/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp28Component } from './comp-28.component';

describe('Comp28Component', () => {
  let component: Comp28Component;
  let fixture: ComponentFixture<Comp28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
