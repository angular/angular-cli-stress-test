/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service622Service } from './service-622.service';

describe('Service622Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service622Service]
    });
  });

  it('should ...', inject([Service622Service], (service: Service622Service) => {
    expect(service).toBeTruthy();
  }));
});
