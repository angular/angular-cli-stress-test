/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service110Service } from './service-110.service';

describe('Service110Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service110Service]
    });
  });

  it('should ...', inject([Service110Service], (service: Service110Service) => {
    expect(service).toBeTruthy();
  }));
});
