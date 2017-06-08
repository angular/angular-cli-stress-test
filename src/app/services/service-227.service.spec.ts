/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service227Service } from './service-227.service';

describe('Service227Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service227Service]
    });
  });

  it('should ...', inject([Service227Service], (service: Service227Service) => {
    expect(service).toBeTruthy();
  }));
});
